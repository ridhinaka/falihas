import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  validationHomeQuestion1 = new FormControl('')
  validationHomeQuestion2 = new FormControl('')
  question = 1

  constructor(private router:Router) { }

  nextButton(){
    if(this.validationHomeQuestion1.value.toUpperCase() !== 'FALIHA ISHMA AMADO'){
      return alert('Salah Cyin')
    }

    if(this.validationHomeQuestion1.value.toUpperCase() === 'FALIHA ISHMA AMADO'){
      this.question = 2
    }
  }

  startButton(){
    if(this.validationHomeQuestion2.value.toUpperCase() !== 'RIDHI NAKA PANGERAN'){
      return alert('Salah Cyin')
    }
    if(this.validationHomeQuestion2.value.toUpperCase() === 'RIDHI NAKA PANGERAN'){
      this.router.navigate(['main'])
      Swal.fire("Verified!", "You're Faliha", "success");
    }
  }

  ngOnInit(): void {
  }

}
