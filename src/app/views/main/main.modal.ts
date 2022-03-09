import {
  OnInit,
  Component,
  OnDestroy,
  ViewChild,
  Inject,
  EventEmitter,
} from '@angular/core';
import {
  EmailValidator,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'details-edit-customer-management-modal',
  templateUrl: './main.modal.html',
  // styleUrls: ['./details-edit-customer-management.modal.css']
})
export class mainModal implements OnInit {

  constructor(
    private dialogref: MatDialogRef<mainModal>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
  ){}

  closeDialog(){
    this.dialogref.close({statusCode:1}
      
    )
  }


  ngOnInit(): void {
  }
}