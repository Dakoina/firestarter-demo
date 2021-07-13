import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-gamenight',
  templateUrl: './gamenight.component.html',
  styleUrls: ['./gamenight.component.scss']
})
export class GamenightComponent implements OnInit {

  id: string | null;

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
  }


  ngOnInit(): void {
  }

}
