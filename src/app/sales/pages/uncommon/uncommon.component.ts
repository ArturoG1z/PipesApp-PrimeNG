import { Component, OnInit } from '@angular/core';
interface IClient {
  name: string;
  genre: string;
}

@Component({
  selector: 'app-uncommon',
  templateUrl: './uncommon.component.html',
  styles: [
  ]
})
export class UncommonComponent implements OnInit {
  clients: IClient[] = [
    {
      name: 'Arturo',
      genre: 'masculino'
    },
    {
      name: 'Fernanda',
      genre: 'femenino'
    },
    {
      name: 'Juan',
      genre: 'masculino'
    },
    {
      name: 'Maria',
      genre: 'femenino'
    },
    {
      name: 'Pedro',
      genre: 'masculino'
    },
    {
      name: 'Sofia',
      genre: 'femenino'
    },
  ];
  invitationMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  clientsMap = {
    '=0': 'no hay clientes',
    '=1': 'solo un cliente',
    'other': 'hay # clientes'
  }
  current = 0;

  person = {
    name: 'Fernando',
    age: 30,
    direction: 'calle falsa 123',
  }

  get clientsNames() {
    return this.clients.map(client => client.name);
  }

  constructor() {
  }
  
  ngOnInit(): void {
  }

  changeClient() {
    this.current++;
    this.current = this.current % this.clients.length;
  }

  deletePerson() {
    if (this.clients.length > 0) {
      this.clients.splice(this.current, 1);
      this.changeClient();
    }
  }
  copyToClipboard(person : any) {
    navigator.clipboard.writeText(JSON.stringify(person));
  }

}
