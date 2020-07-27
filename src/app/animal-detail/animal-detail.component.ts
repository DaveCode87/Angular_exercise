import { AnimalService } from './../shared/services/animal.service';
import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../animal';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
})
export class AnimalDetailComponent implements OnInit {
  animal: Animal;

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getAnimal();
  }

  getAnimal(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.animalService
      .getAnimal(id)
      .subscribe((animal) => (this.animal = animal));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.animalService.update(this.animal).subscribe(() => this.goBack());
  }
}
