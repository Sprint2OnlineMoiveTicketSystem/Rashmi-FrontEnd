import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Theater } from '../theater';
import { TheaterService } from '../theater.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-theater',
  templateUrl: './get-theater.component.html',
  styleUrls: ['./get-theater.component.css']
})
export class GetTheaterComponent implements OnInit {


  ngOnInit(): void {
  }
 

    theaterId:number;
    theater: Observable<Theater>;
   Theater: Theater = new Theater();
    submitted = false;
    constructor(private theaterService: TheaterService,
      private router: Router,private route:ActivatedRoute) {}
    
  
 
  
    reloadData() {
      this.theaterId = this.route.snapshot.params['theaterId'];
    }
  
      getTheater(theaterId: number){
      this.theaterService.getTheater(this.theaterId)
        .subscribe(data => {
          console.log(data)
          this.theater = data;
        }, error => console.log(error));
        this.gotoList();
        
    }
   
    gotoList() {
      this.router.navigate(['theater/search']);
    }
  }
  
  
  


