import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalComponent } from './modal/modal.component';
import { NgbdModalContent } from './modal/modal.component';
import { DownloadAppComponent } from './download-app/download-app.component';
import { PrincipalServicesComponent } from './principal-services/principal-services.component';
import { DigitalOnboardingComponent } from './digital-onboarding/digital-onboarding.component';
import { GetCardComponent } from './get-card/get-card.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { CashinComponent } from './cashin/cashin.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { AngularImgComponent } from './angular-img/angular-img.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SecurityComponent } from './security/security.component';
import { CardPageComponent } from './card-page/card-page.component';
import { FeaturesComponent } from './features/features.component';
import { QrPageComponent } from './qr-page/qr-page.component';
import { InvestmentsPageComponent } from './investments-page/investments-page.component';
import { BillpaymentComponent } from './billpayment/billpayment.component';
import { TransfersPageComponent } from './transfers-page/transfers-page.component';
import { WithdrawalsComponent } from './withdrawals/withdrawals.component';
import { SecurityPageComponent } from './security-page/security-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { FinanceComponent } from './finance/finance.component';
import { BudgetingComponent } from './budgeting/budgeting.component';
import { LoansPageComponent } from './loans-page/loans-page.component';
import { LoansSimulationComponent } from './loans-simulation/loans-simulation.component';
import { CostsPageComponent } from './costs-page/costs-page.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalComponent,
        NgbdModalContent,
        DownloadAppComponent,
        PrincipalServicesComponent,
        DigitalOnboardingComponent,
        GetCardComponent,
        CommissionsComponent,
        CashinComponent,
        CustomerSupportComponent,
        AngularImgComponent,
        WelcomeComponent,
        SecurityComponent,
        CardPageComponent,
        FeaturesComponent,
        QrPageComponent,
        InvestmentsPageComponent,
        BillpaymentComponent,
        TransfersPageComponent,
        WithdrawalsComponent,
        SecurityPageComponent,
        AboutUsComponent,
        WaitingListComponent,
        FinanceComponent,
        BudgetingComponent,
        LoansPageComponent,
        LoansSimulationComponent,
        CostsPageComponent
    ],
    entryComponents: [NgbdModalContent],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
