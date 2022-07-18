import {Component} from "react";
import "./App.css";
import axios from "axios"

import Nav from "./Navigasi/nav";
class App extends Component {
  constructor(props) {
  super(props)
  this.state = {
    jumlah: 1,
    id: null,
    data: [],
    valueInputUser: '',
    ubah: false
    
      }
    this.setJumlah = this.setJumlah.bind(this)
    this.getApi = this.getApi.bind(this)
    this.setId = this.setId.bind(this)
  }
  
  async getApi(idUser = "/") {
    let url = idUser === "/" ? "https://jsonplaceholder.typicode.com/users" : `https://jsonplaceholder.typicode.com/users/${idUser}`
    
    alert(url)
    await axios.get(url)
    .then(response => {
      this.setState({data: idUser !== "/" ? [response.data] : response.data})
    })
     
  }
  setId() {
    
    const idUser = document.getElementById("inputUser").value
    this.setState({id: idUser})
    this.setState({ubah: true})
  }
  
  componentDidUpdate() {
    const {id, ubah} = this.state
    if(ubah === true && id !== null) {
      this.getApi(id)
      this.setState({ubah: false})
    }
  }
  
  componentDidMount() {
    this.getApi()
  }
  
  setJumlah(e) {
   const {jumlah} = this.state
    if (e.target.value === "kurang") {
     if(jumlah === 1 ) return
     this.setState({jumlah: jumlah - 1})
     
    }  else {
    this.setState({ jumlah: jumlah+ 1})
    }
    
  }
  
  render() {
    
    return (
      <div>
       <Nav />
        <div className="w-3/4 bg-slate-500 p-4 flex justify-center my-20 mx-auto">
          <button onClick={this.setJumlah}  className="p-2 bg-cyan-700 rounded text-white" value="kurang"> - </button>
          <p className="m-2 text-base">{this.state.jumlah} </p>
          <button onClick={this.setJumlah} value={"tambah"} className="p-2 bg-cyan-700 rounded text-white"> + </button>
        </div>
        
        <div className="w-full flex justify-center my-4">
       <input type="text" value={this.state.valueInputUser} onChange={e => this.setState({valueInputUser: e.target.value })} placeholder="cari disini" id="inputUser" className="outline-cyan-400 border border-3 boder-red-400 px-3 text-red-400" />
       <button className="px-3 py-px bg-slate-400 rounded " onClick={this.setId}>Cari </button>
       </div>
       
       <table className="mx-auto border">
         <tr className="p-2">
           <th className="border">ID</th>
           <th className="border">Nama Lengkap </th>
           <th className="border">Email </th>
           <th className="border">Kota </th>
           <th className="border">Telepon </th>
         </tr>
         
        
         {this.state.data.map((value, index) => {
          return (
            <tr key={index} className="">
              <td className="px-2 border">{value.id}</td>
              <td className="px-2 border">{value.name}</td>
              <td className="px-2 border">{value.email}</td>
              <td className="px-2 border">{value.address.city}</td>
              <td className="px-2 border">{value.phone}</td>
              
            </tr>
           )
         })}
        
        </table>
        
       
      
      </div>
      )
  }
}

export default App;
