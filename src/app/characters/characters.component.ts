import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  isDataAvailable: boolean = true;
  characters: any[] = [
    {
      name: 'Rick Sanchez',
      status: 'Alive',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      created: '2017-11-04T18:48:46.250Z',
      url: 'https://rickandmortyapi.com/api/character/1',
    },
    {
      name: 'Morty Smith',
      status: 'Alive',
      gender: 'Male',
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      created: '2017-11-04T18:50:21.651Z',
      url: 'https://rickandmortyapi.com/api/character/2',
    },
    {
      name: 'Summer Smith',
      status: 'Alive',
      gender: 'Female',
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      created: '2017-11-04T19:09:56.428Z',
      url: 'https://rickandmortyapi.com/api/character/3',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
