import {Component} from '@angular/core';

import {Hero} from './hero';

@Component({
	selector: 'hero-form',
	templateUrl: './hero-form.component.html'
})

export class HeroFormComponent {

	hermoName:string;

	designation = ['Student', 'Developer', 'Un Employee', 'Govt. Employee'];


	model =  new Hero(21, 'Sadhana', this.designation[1], 'sadhanakamma@gmail.com');

	submitted = false;

	onSubmit() {
		this.submitted = true;
	}

	getData() {

		 return JSON.stringify(this.model);
	}

	createNewHero(){

		this.model = new Hero(22, '', '', '');
	}


}