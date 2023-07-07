import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
// 07 - Accessing Route Parameters,
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  // ngOnInit() {
  //   this.route.paramMap.subscribe((params) => {
  //     console.log(params);
  //     let id = params.get('id');
  //     console.log(id);
  //   });

  // 08 -  Why Route Parameters Are Observables
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
  }

  // 13- Programmatic Navigation
  // constructor(private router: Router) {}

  // submit() {
  //   this.router.navigate(['/followers'], {
  //     queryParams: { page: 1, order: 'newest' },
  //   });
  // }
}
