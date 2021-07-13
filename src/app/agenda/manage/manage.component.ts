import {Component, OnInit} from '@angular/core';
import {SharedModule} from 'src/app/shared/shared.module';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
