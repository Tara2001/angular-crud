import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Ser01Service } from '../services/ser01.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pinfo',
  templateUrl: './pinfo.component.html',
  styleUrls: ['./pinfo.component.css']
})
export class PinfoComponent implements OnInit {

  information: FormGroup;
  pinfodata: any;
  id: any;
  tdata: any;
  cond: boolean = false;

  constructor(private entries: FormBuilder, private services: Ser01Service, private next: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger
    this.route.paramMap.subscribe((params) => {
      debugger
      this.id = params.get("id");
      if (this.id != undefined && this.id != null && this.id != '') {
        this.cond = true
      }
    })
    this.information = this.entries.group({
      fname: [''],
      lname: [''],
      location: [''],
      contact: [''],
      email: ['']
    })
    if (this.id != undefined || this.id != null || this.id != '') {
      this.services.getbyid(this.id).subscribe((result: any) => {
        debugger
        this.tdata = result;
        this.information.patchValue(this.tdata);
        // this.information.controls['fname'].setValue(this.tdata.fname);
      })
    }
  }

  submit() {
    debugger
    if (this.cond == false) {
      this.pinfodata = this.information.value;

      this.services.postdata(this.pinfodata).subscribe((result: any) => {
        debugger

        this.next.navigateByUrl('sinfo')
      })
    }
    else {
      this.pinfodata = this.information.value;
      this.services.update(this.pinfodata, this.id).subscribe((result: any) => {
        debugger
        this.next.navigateByUrl('sinfo')
      })
    }

  }

}
