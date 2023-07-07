import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  submitted: boolean = false;

  constructor(
    private entries: FormBuilder,
    private services: Ser01Service,
    private next: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger

    this.information = this.entries.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      location: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]]
    })

    this.route.paramMap.subscribe((params) => {
      debugger
      this.id = params.get("id");
      if (this.id != undefined && this.id != null && this.id != '') {
        this.cond = true
      }
    })

    if (this.id != undefined && this.id != null && this.id != '') {
      this.services.getbyid(this.id).subscribe((result: any) => {
        debugger
        this.tdata = result;
        this.information.patchValue(this.tdata);
        // this.information.controls['fname'].setValue(this.tdata.fname);
      })
    }
  }

  get s() {
    return this.information.controls
  }

  submit() {
    debugger
    this.submitted = true
    if (this.information.invalid) {
      return;
    }

    if (this.cond == false) {
      this.pinfodata = this.information.value;

      if (confirm("Are you sure want to proceed?")) {
        this.services.postdata(this.pinfodata).subscribe((result: any) => {
          debugger
          alert('Registered successfully !')
          this.next.navigateByUrl('sinfo')
        })
      }
    }
    else {
      this.pinfodata = this.information.value;
      if (confirm("Are you sure want to update?")) {
        this.services.update(this.pinfodata, this.id).subscribe((result: any) => {
          debugger
          alert('Record updated successfully !')
          this.next.navigateByUrl('sinfo')
        })
      }
    }

  }

}
