export const DynamicTemplate = `
    @if(dynamicComponent__){
        <ng-component-outlet [ngComponentOutlet]="dynamicComponent__"/>
    }
`;