import { Component, OnInit } from '@angular/core';
import { Ser01Service } from '../services/ser01.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sinfo',
  templateUrl: './sinfo.component.html',
  styleUrls: ['./sinfo.component.css']
})
export class SinfoComponent implements OnInit {

  tdata: any;

  constructor(private services: Ser01Service, private next: Router) {

  }

  ngOnInit(): void {
    this.callfunc();
  }

  callfunc() {
    this.services.getdata().subscribe((result: any) => {
      debugger
      this.tdata = result;
    })
  }

  update(id: any) {
    debugger
    this.next.navigateByUrl('pinfo/' + id)
  }

  delete(data: any) {
    debugger
    //  var ddd = this.tdata.splice(data.id)
    //  console.log(ddd);

    if (confirm("Are you sure want to delete?")) {

      this.services.delete(data).subscribe((result: any) => {
        debugger
        console.log("Data deleted successfully !", result)
        alert('Record deleted successfully !')
        this.callfunc();
      })
    }
  }

  logout() {
    debugger
    localStorage.removeItem('token')
    this.next.navigateByUrl('login');
  }

  add() {
    this.next.navigateByUrl('pinfo');
  }

  // hobbies 
  hob(data: any) {
    debugger
    var newhob = ''
    if (data != undefined) {

      data.forEach((element: { hobbies: string; }) => {
        if (newhob == '') {
          newhob = element.hobbies;
        } else {
          newhob = newhob + ',' + element.hobbies;
        }
      });
      return newhob;
    }
    else {
      return null
    }
  }
}

