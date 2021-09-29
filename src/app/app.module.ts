import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import {​​​​​​ FormsModule, ReactiveFormsModule }​​​​​​ from'@angular/forms';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NoteComponent } from './Components/note/note.component';
import { NoteIconComponent } from './Components/note-icon/note-icon.component';
import { CollaboraterDialogComponent } from './Components/collaborater-dialog/collaborater-dialog.component';
import { GetNotesComponent } from './Components/get-notes/get-notes.component';
import { GetNotesIconComponent } from './Components/get-notes-icon/get-notes-icon.component';
import { ReminderNotesComponent } from './Components/reminder-notes/reminder-notes.component';
import { ArchiveNotesComponent } from './Components/archive-notes/archive-notes.component';
import { TrashNotesComponent } from './Components/trash-notes/trash-notes.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    NoteComponent,
    NoteIconComponent,
    CollaboraterDialogComponent,
    GetNotesComponent,
    GetNotesIconComponent,
    ReminderNotesComponent,
    ArchiveNotesComponent,
    TrashNotesComponent
  ],
  entryComponents:[CollaboraterDialogComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
