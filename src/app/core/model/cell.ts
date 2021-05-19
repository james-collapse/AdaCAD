/**
 * A class that stores information about a single cell within the draft.
 * @param poles a four bit number (corresponding to NSEW) that represents the path a yarn through this cell
 */
export class Cell {
  poles: number;
  is_up: boolean;
  is_set: boolean;
  mask_id: number;


  /**
   * 
   */
  constructor() {
    this.poles = 0b0000;
    this.is_set = false;
    this.is_up = false;
    this.mask_id = -1;
  }


  setHeddleUp(){
    this.is_up = true;
    this.is_set = true;
  }

  setHeddleDown(){
     this.is_up = false;
     this.is_set = true;
  }


  setNorth(){
    this.poles = this.poles | 0b1000;
  }

  setEast(){
    this.poles = this.poles | 0b0100;

  }

  setNorthSouth(){
    this.setNorth();
    this.setSouth();
  }

  setEastWest(){
    this.setEast();
    this.setWest();
  }

  setSouth(){
    this.poles = this.poles | 0b0010;
  }

  setWest(){
    this.poles = this.poles | 0b0001;
  }

  unsetNorth(){
    this.poles = this.poles ^ 0b1000;
  }

  unsetEast(){
    this.poles = this.poles ^ 0b0100;

  }

  unsetSouth(){
    this.poles = this.poles ^ 0b0010;
  }

  unsetWest(){
    this.poles = this.poles ^ 0b0001;
  }


  hasNorth():boolean{
    let p:number = this.poles >>> 3;
    return(p === 1);
  }

  isEastWest():boolean{
    return (this.poles & 0b0101) === 0b0101;
  }

  isSouthEast():boolean{
    return (this.poles & 0b0110) === 0b0110;
  }

  isSouthWest():boolean{
    return (this.poles & 0b0011) === 0b0011;
  }

  isNorthSouth():boolean{
    return (this.poles & 0b1010) === 0b1010;
  }

  isNorthEast():boolean{
    return (this.poles & 0b1100) === 0b1100;
  }

  isNorthWest():boolean{
    return (this.poles & 0b1001) === 0b1001;
  }

  isWest():boolean{
    return (this.poles & 0b0001) === 0b0001;
  }

  isEast():boolean{
    return (this.poles & 0b0100) === 0b0100;
  }

  hasEast():boolean{
    let p:number = this.poles >>> 2;
    return((p %2)===1);
  }

  hasSouth():boolean{
    let p:number = this.poles >>> 1;
    return((p %2)===1);
  }

  hasWest():boolean{
    return((this.poles %2)===1);
  }

  isUp():boolean{
    return this.is_up;
  }

  getPoles(){
    return this.poles;
  }

  getMaskId(){
    return this.mask_id;
  }

  setHeddle(value:boolean){
    this.is_up = value;
  }

  setPoles(poles:number){
    this.poles = poles;
  }

  setMaskId(id: number){
    this.mask_id = id;
  }

  unsetMaskId(){
    this.mask_id = -1;
  }

  unsetHeddle(){
    this.is_up = false;
    this.is_set = false;
  }

  unsetPoles(){
    this.poles = 0b0000;
  }



  
  
}