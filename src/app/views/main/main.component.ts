import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { mainModal } from "./main.modal";
import { FormControl, FormGroup } from "@angular/forms";
import { GamesModal } from "./games.modal";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
})
export class MainComponent implements OnInit {
  @ViewChild('myDiv') myDiv: ElementRef;
  constructor(public dialog: MatDialog) {}

  gamesValue = 0;
  step = 0;

  tabSelected = 0;
  isDimmed = "notDimmed";
  playAudioVar = 0;

  imageArray = [
    "../../../assets/1.jpg",
    "../../../assets/2.jpg",
    "../../../assets/3.jpg",
    "../../../assets/4.jpg",
  ];

  gamesChallenge = [
    {
      value: 1,
      done: 0,
      name: "Challenge 1",
    },
    {
      value: 2,
      done: 0,
      name: "Challenge 2",
    },
    {
      value: 3,
      done: 0,
      name: "Challenge 3",
    },
  ];

  stopAudio(){
    var audio:any = document.getElementById('audio')
    audio.muted = true
  }

  playAudio() {
    if (this.step === 0) {
      return false;
    }

    return true;
  }

  openGamesModal(element) {
    const dialogRef = this.dialog.open(GamesModal, {
      data: element,
      height: "70%",
      // width: "70%",
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((response) => {
      console.log(response, "dialog");
      if (response !== undefined) {
        element["done"] = response["done"];
        this.getColor(element);
        let found = 0;
        for (const eachGames of this.gamesChallenge) {
          if (eachGames["done"] === 1) {
            found++;
          }
        }
        if (found === 3) {
          this.closingan();
        }
      }
    });
  }

  getColor(element) {
    if (element["done"] === 0) {
      return "accent";
    }

    if (element["done"] === 1) {
      return "primary";
    }

    return "danger";
  }

  disabledButton(data) {
    if (data["done"] === 1) {
      return true;
    }

    return false;
  }

  homePage() {
    this.step = 0;
    this.gamesChallenge = [
      {
        value: 1,
        done: 0,
        name: "Challenge 1",
      },
      {
        value: 2,
        done: 0,
        name: "Challenge 2",
      },
      {
        value: 3,
        done: 0,
        name: "Challenge 3",
      },
    ];
    this.tabSelected = 0;
  }

  galleryPage() {
    this.tabSelected = 1;
  }

  favoriteSelected() {
    this.tabSelected = 2;
  }

  videoPage() {
    this.tabSelected = 3;
  }

  closingan() {
    const dialogRef = this.dialog.open(mainModal, {
      height: "75%",
      width: "70%",
      disableClose: false,
    });

    this.playAudioVar = 1;

    dialogRef.afterClosed().subscribe((response) => {
      if (response !== undefined) {
        if (response["statusCode"] === 1) {
          this.step = 1;
        }
      }
    });
  }

  ngOnInit(): void {}
}
