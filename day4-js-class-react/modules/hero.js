class Hero{
    title = "default title";
    firstname = "default firstname";
    lastname = "default lastname";
    #mission = "private mission";
    static version = 101;
    constructor(htitle, hfname, hlname){
      this.title = htitle;
      this.firstname = hfname;
      this.lastname = hlname;
    }
    fullname(){
      return this.firstname+" "+this.lastname;
    }
    get mission(){
      return this.#mission;
    }
    set mission(nmission){
      this.#mission = nmission;
    }
};

export { Hero };