import { Cell } from './cell';

/**
 * Definition of pattern object.
 * @class
 */

export class Pattern {
  height: number;
  width: number;
  pattern: Array<Array<Cell>>;
  favorite: boolean;
  id: number;
  name: string;

  constructor(obj: any) {

    this.favorite = (obj.favorite !== undefined) ? obj.favorite : false;
    this.id = (obj.id !== undefined) ? obj.id : -1;
    this.name = (obj.name !== undefined) ? obj.name : "unnamed";
    
    this.pattern = [];

    if(obj.pattern !== undefined){
      this.height = obj.pattern.length;
      this.width =  obj.pattern[0].length;
      for(let i = 0; i < this.height; i++){
        this.pattern.push([]);
        for(let j = 0; j < this.width; j++){
          this.pattern[i].push(new Cell(obj.pattern[i][j]));
        }
      }

    }else{
      this.width = 0;
      this.height = 0;
    }

 }


  setPattern(pattern) {
    this.height = pattern.length;

    if (this.height > 0) {
      this.width = pattern[0].length;
    } else {
      this.width = 0;
    }

    this.pattern = pattern;

    return this;
  }


  toggleFavorite(){
    this.favorite = !this.favorite;
  }

}