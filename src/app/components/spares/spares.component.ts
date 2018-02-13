import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Spares} from "../../spares";

@Component({
  selector: 'app-spares',
  templateUrl: './spares.component.html',
  styleUrls: ['./spares.component.css']
})
export class SparesComponent implements OnInit {
  spares: any[];
  name: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    console.log('insode on init');
    console.log(Spares.SPARES_FOR_PCVCB);
    this.route.params.subscribe(
      (params: Params) => {
        let spares = params['spares'];
        let flag = Spares.ALL_SPARES.find(
          value => {
            if(value === spares) {
              return true;
            }
          }
        );
        if(spares && flag) {
          this.spares = Spares.getSpares(spares);
          this.name = spares;
        }
        else {
          this.router.navigate(['/not-found']);
        }
      }
    );
  }

  add(card: HTMLDivElement) {
    card.classList.add('border');
    card.classList.add('border-danger');
  }
  remove(card: HTMLDivElement) {
    card.classList.remove('border-danger');
    card.classList.remove('border');
  }
}
