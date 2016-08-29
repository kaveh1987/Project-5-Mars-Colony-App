

export class Encounter {
  constructor(
    public atype: string,
    public data: string,
    public action: string
    
  ) {}
}

export class Colonist {
  constructor(
    public name: string,
    public age: string,
    public job_id: string
  ) {}
}
export class Alien {
  constructor(
    public data: number,
    public atype: string,
    public action: string
  ) {}
}
export class Occupation {
  constructor(
    public data: number,
    public atype: string,
    public action: string
  ){}
}
