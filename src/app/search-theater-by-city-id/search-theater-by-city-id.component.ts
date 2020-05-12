import { Component, OnInit } from '@angular/core';
import { TheaterService } from '../theater.service';
import { Observable } from 'rxjs';
import { Theater } from '../theater';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-theater-by-city-id',
  templateUrl: './search-theater-by-city-id.component.html',
  styleUrls: ['./search-theater-by-city-id.component.css']
})
export class SearchTheaterByCityIdComponent implements OnInit {
 cityId:number
 theater:Theater
    
  theaters: Observable<Theater[]>

  constructor(private theaterService: TheaterService,
    private router: Router,private route:ActivatedRoute) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.cityId=this.route.snapshot.params['id'];
    this.theaters = this.theaterService.searchTheater(this.cityId,this.theater);
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['theater/searchTheater',this.cityId]);
  }

}
