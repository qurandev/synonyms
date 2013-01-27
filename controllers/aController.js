var myApp = angular.module('myApp',[]);


function aController($scope) {
    
    $scope.typeOptions = [
    { name: 'Feature', value: 'feature' }, 
    { name: 'Bug', value: 'bug' }, 
    { name: 'Enhancement', value: 'enhancement' },
    
        { name: 'Feature', value: 'feature' }, 
    { name: 'Bug', value: 'bug' }, 
    { name: 'Enhancement', value: 'enhancement' },
    
        { name: 'Feature', value: 'feature' }, 
    { name: 'Bug', value: 'bug' }, 
    { name: 'Enhancement', value: 'enhancement' },
    
        { name: 'Feature', value: 'feature' }, 
    { name: 'Bug', value: 'bug' }, 
    { name: 'Enhancement', value: 'enhancement' },
    
        { name: 'Feature', value: 'feature' }, 
    { name: 'Bug', value: 'bug' }, 
    { name: 'Enhancement', value: 'enhancement' },
    
        { name: 'Feature', value: 'feature' }, 
    { name: 'Bug', value: 'bug' }, 
    { name: 'Enhancement', value: 'enhancement' },
    
        { name: 'Feature', value: 'feature' }, 
    { name: 'Bug', value: 'bug' }, 
    { name: 'Enhancement', value: 'enhancement' },
    
        { name: 'Feature', value: 'feature' }, 
    { name: 'Bug', value: 'bug' }, 
    { name: 'Enhancement', value: 'enhancement' },
    
        { name: 'Feature', value: 'feature' }, 
    { name: 'Bug', value: 'bug' }, 
    { name: 'Enhancement', value: 'enhancement' },
    
        { name: 'Feature', value: 'feature' }, 
    { name: 'Bug', value: 'bug' }, 
    { name: 'Enhancement', value: 'enhancement' },
    
        { name: 'Feature', value: 'feature' }, 
    { name: 'Bug', value: 'bug' }, 
    { name: 'Enhancement', value: 'enhancement' },
    
        
    ];
    
    $scope.form = {type : $scope.typeOptions[0].value};
}