import { Component, OnInit } from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";


@Component({
  selector: 'app-enquire',
  templateUrl: './enquire.component.html',
  styleUrls: ['./enquire.component.scss'],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule]
})
export class EnquireComponent  implements OnInit {

  formGroup;

  enquireServices = [
    {
      serviceName: "WebSites",
      serviceValue: "webService_websites"
    },
    {
      serviceName: "Gaming",
      serviceValue: "computerService_gaming"
    },
    {
      serviceName: "Workstations",
      serviceValue: "computerService_workstations"
    },
    {
      serviceName: "Assistance",
      serviceValue: "computerService_assistance"
    }
  ]

  constructor(private modalCtrl: ModalController, private formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      nameControl: ["",
      Validators.compose([
        Validators.maxLength(30),
        Validators.pattern(new RegExp(/^[A-Z]+$/i)),
        Validators.required
      ])
      ],
      surnameControl: ["",
      Validators.compose([
        Validators.maxLength(30),
        Validators.pattern(new RegExp(/^[A-Z]+$/i)),
      ])],
      serviceControl: ["",
      Validators.compose([
        Validators.required
      ])],
      emailControl: ["",
      Validators.compose([
        Validators.pattern(new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)),
        Validators.maxLength(30),
        Validators.required
      ])
      ],
      messageControl: ["",
      Validators.compose([
        Validators.maxLength(3500),
        Validators.required
      ])]
    })
  }

  ngOnInit() {}



  cancelEnquire() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  sendEnquire() {
    this.modalCtrl.dismiss(null, 'send');
  }

}
