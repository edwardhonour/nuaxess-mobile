import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { FuseFullscreenModule } from '@fuse/components/fullscreen/fullscreen.module';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { MessagesModule } from 'app/layout/common/messages/messages.module';
import { NotificationsModule } from 'app/layout/common/notifications/notifications.module';
import { QuickChatModule } from 'app/layout/common/quick-chat/quick-chat.module';
import { SearchModule } from 'app/layout/common/search/search.module';
import { ShortcutsModule } from 'app/layout/common/shortcuts/shortcuts.module';
import { UserModule } from 'app/layout/common/user/user.module';
import { SharedModule } from 'app/shared/shared.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { VerticalMenuComponent } from './nuaxess/vertical-menu/vertical-menu.component';
import { TopMenuComponent } from './nuaxess/top-menu/top-menu.component';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { UserEnrollComponent } from './nuaxess/user-enroll/user-enroll.component';
import { FuseCardModule } from '@fuse/components/card';
import { InvalidTokenComponent } from './nuaxess/invalid-token/invalid-token.component';
import { ForcedLogoutComponent } from './nuaxess/forced-logout/forced-logout.component';
import { NewSigninComponent } from './nuaxess/new-signin/new-signin.component';
import { UserLogoutComponent } from './nuaxess/user-logout/user-logout.component';
import { EmployeeHomeComponent } from './mobile/employee-home/employee-home.component';
import { EmployeeCardsComponent } from './mobile/employee-cards/employee-cards.component';
import { EmployeeDependentsComponent } from './mobile/employee-dependents/employee-dependents.component';
import { EmployeeRegistrationComponent } from './mobile/employee-registration/employee-registration.component';

const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

@NgModule({
    declarations: [
        AppComponent,
        VerticalMenuComponent,
        TopMenuComponent,
        UserEnrollComponent,
        InvalidTokenComponent,
        ForcedLogoutComponent,
        NewSigninComponent,
        UserLogoutComponent,
        EmployeeHomeComponent,
        EmployeeCardsComponent,
        EmployeeDependentsComponent,
        EmployeeRegistrationComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseFullscreenModule,
        FuseHighlightModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        FuseCardModule,
        LayoutModule,
        LanguagesModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MessagesModule,
        NotificationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        QuickChatModule,
        SearchModule,
        ShortcutsModule,
        UserModule,
        SharedModule,
        MarkdownModule.forRoot({})
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
