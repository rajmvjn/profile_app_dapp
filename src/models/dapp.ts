interface DAPP {
  _id: string;
  name: string;
  description: string[];
}

export default DAPP;

// class DAPP {
//   _id: string;
//   name: string;
//   description: string[];

//   constructor(dapp: DAPP) {
//     this._id = new Date().getTime().toString();
//     this.name = dapp.name;
//     this.description = dapp.description;
//   }
// }

// type DAPP = {
//   _id: string;
//   name: string;
//   description: string[];
// }
