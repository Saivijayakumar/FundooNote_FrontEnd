import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteServiceService } from 'src/app/Services/NoteService/note-service.service';

@Component({
  selector: 'app-collaborater-dialog',
  templateUrl: './collaborater-dialog.component.html',
  styleUrls: ['./collaborater-dialog.component.scss']
})
export class CollaboraterDialogComponent implements OnInit {

  constructor(private noteService: NoteServiceService,private snackBar: MatSnackBar,public dialogRef: MatDialogRef<CollaboraterDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  UserData = JSON.parse(localStorage.getItem("UserDetails")!);
  
  searchField:any;
  token: any;
  result : any;
  noteCollaborator: any = [];
  emails: string[]=[];

  ngOnInit(): void {
    console.log("Recived Data");
    console.log(this.data.noteId);
    this.GetAllCollaborator();
  }
  GetAllCollaborator() {
    this.noteService.GetAllCollaborator(this.token,this.data.noteId).subscribe((response: any) => {
      console.log(response);
      this.noteCollaborator= response.data;   
      console.log(this.noteCollaborator);
    })
  
  }
  clearSearchField() {
  console.log(this.emails);
  this.emails.push(this.searchField);
  console.log(this.emails);
  this.searchField = '';
  }
  RemoveCollab(email:any)
  {
    this.emails.splice(this.emails.indexOf(email),1);
  }

  save(){
    for(var email of this.emails)
    {
      let updateObject = {
        NoteId: this.data.noteId,
        SenderEmail : this.UserData.Email,
        ReceiverEmail : email
      };
      
      this.noteService.AddCollaborator(this.token,updateObject).subscribe((response: any) => {
        console.log(response);
        if(response.Status == true)
        {
          this.result=response.Message;
        }
        
      },(error: HttpErrorResponse) => {
        console.log(error.error.Message);
        this.result=error.error.Message;
      })     
    }
    this.snackBar.open(`${this.result}`, '', {
      duration: 4000,
      verticalPosition: 'bottom',
      horizontalPosition: 'left'
    });

    this.dialogRef.close();
 }

 RemoveCollaborator(collaborator : any)
 {
  this.noteService.RemoveCollaborator(this.token,collaborator.collaboratorId).subscribe((response: any) => {
    console.log(response);
        if(response.Status == true)
        {
          this.GetAllCollaborator();
          this.snackBar.open(`${response.Message}`, '', {
            duration: 4000,
            verticalPosition: 'bottom',
            horizontalPosition: 'left'
          });

        }
        
      },(error: HttpErrorResponse) => {
        console.log(error.error.Message);
        this.snackBar.open(`${error.error.Message}`, '', {
          duration: 4000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        });
      })
  }

}