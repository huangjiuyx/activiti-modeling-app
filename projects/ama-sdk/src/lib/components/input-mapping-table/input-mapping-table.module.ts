/*!
 * @license
 * Copyright 2019 Alfresco, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatInputModule
} from '@angular/material';
import { InputMappingTableComponent } from './input-mapping-table.component';
import { CoreModule } from '@alfresco/adf-core';
import { MappingDialogModule } from '../mapping-dialog/public_api';
import { VariablesModule } from '../../variables/variables.module';

@NgModule({
    imports: [
        CommonModule,
        MatTableModule,
        MatIconModule,
        MatTooltipModule,
        MatSelectModule,
        MatInputModule,
        MappingDialogModule,
        VariablesModule,
        CoreModule.forChild()
    ],
    declarations: [InputMappingTableComponent],
    exports: [InputMappingTableComponent]
})
export class InputMappingTableModule {}
