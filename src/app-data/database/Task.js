//@ts-nocheck
import Dexie, { liveQuery } from 'dexie';
import { uniq } from 'lodash';

class Task extends Dexie {
   constructor() {
      super('tasklist');
      this.version(1).stores({
         todos: '++id, name, completed'
      });
   }

   queryTasks() {
      return liveQuery(
         async () => {
            let tasks = await this.todos
               .filter(task => task.completed === false)
               .toArray();
            return tasks.length ? tasks : false;
         }
      )
   }

   queryCompleted() {
      return liveQuery(
         async () => {
            let completed = await this.todos
            .filter(task => task.completed === true)
            .toArray();
            return completed.length ? completed : false;
         }
      )
   }

}

export default new Task();