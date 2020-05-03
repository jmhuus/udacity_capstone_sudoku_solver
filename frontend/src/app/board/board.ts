export class Board {
  public id: number;
  public board: Object;
  public board_solved: Object;
  public board_original: Object;

  public constructor(id: number,
                     board: Object,
                     board_solved: Object,
                     board_original: Object) {
    this.id = id;
    this.board = board;
    this.board_solved = board_solved;
    this.board_original = board_original;
  }

  format(): Object {
    return {
      "id": this.id,
      "board": this.board,
      "board_solved": this.board_solved,
      "board_original": this.board_original
    }
  }

  // Returns a blank board Object
  static getBlankBoard(): Object {
    return {
      0: [null,null,null,null,null,null,null,null,null],
      1: [null,null,null,null,null,null,null,null,null],
      2: [null,null,null,null,null,null,null,null,null],
      3: [null,null,null,null,null,null,null,null,null],
      4: [null,null,null,null,null,null,null,null,null],
      5: [null,null,null,null,null,null,null,null,null],
      6: [null,null,null,null,null,null,null,null,null],
      7: [null,null,null,null,null,null,null,null,null],
      8: [null,null,null,null,null,null,null,null,null],
    }
  }
}
