import { Component, OnInit } from '@angular/core';
import { Theater } from '../theater';
import { TheaterService } from '../theater.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-theater-by-city-id',
  templateUrl: './add-theater-by-city-id.component.html',
  styleUrls: ['./add-theater-by-city-id.component.css']
})
export class AddTheaterByCityIdComponent implements OnInit {
  cityId:number;
  theater:Theater;
 submitted = false;
  

  constructor(private TheaterService: TheaterService,
    private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.theater = new Theater();  }

  newTheater(): void {
    this.submitted = false;
    
  }

  save() {
    this.cityId=this.route.snapshot.params['id'];
    console.log(this.cityId);
    this.TheaterService.createTheaterByCityId(this.cityId,this.theater)
      .subscribe(data => console.log(data), error => console.log(error));
    this.theater = new Theater();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['theater/addbyCity',this.cityId]);
  }
}