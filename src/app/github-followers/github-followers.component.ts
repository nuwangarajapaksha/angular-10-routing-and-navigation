import { ActivatedRoute } from '@angular/router';
// import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import 'rxjs/add/Observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css'],
})
export class GithubFollowersComponent implements OnInit {
  followers: any[] | undefined;

  constructor(private route: ActivatedRoute) {}

  
  ngOnInit() {
    // 12- The SwitchMap Operator
    // Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap,
    // ]).switchMap(combind =>{
    //   let id = combind[0].get('id');
    //   let page = combind[1].get('page');

    //   return this.service.getAll();

    // }).subscribe(this.followers => this.followers = this.followers);


    // // 11- Subscribing to Multiple Observables 
    //  Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap,
    // ]).subscribe((combind) => {
    //   let id = combind[0].get('id');
    //   let page = combind[1].get('page');

    //   // this.service.getAll({ id: id, page: page });
    //   this.service.getAll() .subscribe(followers => this.followers = followers);
    // };);

    // 10- Query Parameters
    this.route.paramMap.subscribe((params) => {});
    let id = this.route.snapshot.paramMap.get('id');
    this.route.queryParamMap.subscribe((params) => {});
    let page = this.route.snapshot.queryParamMap.get('page');
  }

  // constructor(private service: GithubFollowersService) { }

  // ngOnInit() {
  //   this.service.getAll()
  //     .subscribe(followers => this.followers = followers);
  // }
}
