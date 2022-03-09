import {
  OnInit,
  Component,
  OnDestroy,
  ViewChild,
  Inject,
  EventEmitter,
} from "@angular/core";
import {
  EmailValidator,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import Swal from "sweetalert2";


@Component({
  selector: "details-edit-customer-management-modal",
  templateUrl: "./games.modal.html",
  styleUrls: ["./main.component.css"],
})
export class GamesModal implements OnInit {
  constructor(
    private dialogref: MatDialogRef<GamesModal>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) { }

  falihaForm;
  AIForm;

  isLoading = false
  "https://wa.me/6282110781073?text=Please buy me this shirt :) REMINDER FOR FALIHA: after chat me through whatsapp,please dont forget to go back to the web again (this is just a reminder for YOU)"
  hrefVariable = ''

  falihaFormTitle = "";
  aiFormTitle = "";
  nextChallenge = 0;

  totalPointChallenge1 = 0;


  submitCardForm = new FormGroup({
    question_1: new FormControl(""),
    question_2: new FormControl(""),
    question_3: new FormControl(""),
  });

  wishForm = new FormControl('')
  succesHref = 0;

  suitCase = [
    {
      name: "🖐",
      formValue: "KERTAS",
      value: 1,
    },
    {
      name: "✌",
      formValue: "GUNTING",
      value: 2,
    },
    {
      name: "✊",
      formValue: "BATU",
      value: 3,
    },
  ];

  clickMe(){
    if(this.wishForm.value === ''){
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "ISI UR WISH!",
      });
      return;
    }
    if(this.wishForm.value !== ''){
      let string = "https://wa.me/6282110781073?text="
      this.hrefVariable = string.concat(this.wishForm.value)
      this.succesHref = 1
   
    }
  }
  move(){
    this.nextChallenge = 1
    console.log(this.nextChallenge,'mne')
  }



  showSuitTitle(element) {
    for (const eachTitle of this.suitCase) {
      if (element["value"] === eachTitle["value"])
        return eachTitle["formValue"];
    }

    return "";
  }

  closeDialog() {
    this.submitCardForm.get('question_1').enable()
    this.submitCardForm.get('question_2').enable()
    this.submitCardForm.get('question_3').enable()
    this.dialogref.close();
  }

  changeTitle() {

      if (this.AIForm === 1) {
        this.aiFormTitle = "KERTAS";
      }

      if (this.AIForm === 2) {
        this.aiFormTitle = "GUNTING";
      }

      if (this.AIForm === 3) {
        this.aiFormTitle = "BATU";
      }

      if (this.falihaForm === 1) {
        this.falihaFormTitle = "KERTAS";
      }

      if (this.falihaForm === 2) {
        this.falihaFormTitle = "GUNTING";
      }

      if (this.falihaForm === 3) {
        this.falihaFormTitle = "BATU";
      }
    
  }

  nextChallengeFunc() {
    this.dialogref.close({
      done:1,challenge_type:this.data['value']
    })
  }

  checkQuestion1(){
    
    if(this.submitCardForm.get('question_1').value.toUpperCase() === 'KODALINE'){
      this.totalPointChallenge1 += 1
      Swal.fire("Bravo!", "KAMU BENAR", "success");
      this.submitCardForm.get('question_1').disable()
      this.checkAllPoint()
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "JAWABAN KAMU SALAH!",
      });
      return;
    }  
  }

  checkQuestion2(){
    if(this.submitCardForm.get('question_2').value.toUpperCase() === 'BISMILLAH' || this.submitCardForm.get('question_2').value.toUpperCase() === 'BISMILAH'){
      this.totalPointChallenge1 += 1
      Swal.fire("Bravo!", "KAMU BENAR", "success");
      this.submitCardForm.get('question_2').disable()
      this.checkAllPoint()
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "JAWABAN KAMU SALAH!",
      });
      return;
    }
  }

  checkQuestion3(){
    if(this.submitCardForm.get('question_3').value.toUpperCase() === 'MARUGAME UDON'){
      this.totalPointChallenge1 += 1
      Swal.fire("Bravo!", "KAMU BENAR", "success");
      this.submitCardForm.get('question_3').disable()
      this.checkAllPoint()
    } else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "JAWABAN KAMU SALAH!",
      });
      return;
    } 
  }

  checkAllPoint(){
    if(this.totalPointChallenge1 === 3){
      this.nextChallenge = 1
    }
  }


  async suitValue(element) {
    this.falihaForm = element["value"];
    this.AIForm = Math.ceil(Math.random() * this.suitCase.length );


    this.changeTitle();
    let winConditon = 0

    if (this.falihaForm === 1 && this.AIForm === 2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "KALAH!",
      });
    }

    if (this.falihaForm === 2 && this.AIForm === 1) {
      Swal.fire("Bravo!", "KAMU MENANG", "success");
      winConditon = 1
    }

    if (this.falihaForm === 1 && this.AIForm === 3) {
      Swal.fire("Bravo!", "KAMU MENANG", "success");
      winConditon = 1
    }

    if (this.falihaForm === 3 && this.AIForm === 1) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "KALAH!",
      });
    }

    if (this.falihaForm === 2 && this.AIForm === 3) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "KALAH!",
      });
    }

    if (this.falihaForm === 3 && this.AIForm === 2) {
      Swal.fire("Bravo!", "KAMU MENANG", "success");
      winConditon = 1
    }

    if (
      (this.falihaForm === 1 && this.AIForm === 1) ||
      (this.falihaForm === 2 && this.AIForm === 2) ||
      (this.falihaForm === 3 && this.AIForm === 3)
    ) {
      Swal.fire(
        'MASIH',
        'SERI CUY',
        'question'
      )
    }

    if(winConditon === 1){
      this.nextChallenge = 1
    }
  }

  ngOnInit(): void {
    console.log(this.data, "this data");
  }
}
