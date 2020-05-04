export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public username: number;
  public description: number;
  public jwt: string;

  public constructor(id: number, firstName: string, lastName: string,
    username: number, description: number, jwt: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.description = description;
    this.jwt = jwt;
  }

  format(): Object {
    return {
      "id": this.id,
      "firstName": this.firstName,
      "lastName": this.lastName,
      "username": this.username,
      "description": this.description,
      "jwt": this.jwt
    }
  }
}
