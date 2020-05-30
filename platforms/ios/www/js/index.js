/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.addEventListener('DOMContentLoaded', this.onDOMContentLoaded.bind(this), false);
    },
    
    onDOMContentLoaded: function (){
        console.log("onDOMContentLoaded");
        document.querySelector("#setContactKey").addEventListener( 'click', this.setContactKey, false );
        document.querySelector("#getContactKey").addEventListener( 'click', this.getContactKey, false );
        document.querySelector("#isPushEnabled").addEventListener( 'click', this.isPushEnabled, false );
        document.querySelector("#enablePush").addEventListener( 'click', this.enablePush, false );
        document.querySelector("#disablePush").addEventListener( 'click', this.disablePush, false );
        document.querySelector("#getSystemToken").addEventListener( 'click', this.getSystemToken, false );
        
    },
    alertDismissed: function () {
    // 任意のコード
    },
    showAlert: function (title, message) {
        navigator.notification.alert(
            message, // メッセージ
            this.alertDismissed, // コールバック関数
            title, // タイトル
            'close' // ボタン名
        );
    }, 
    setContactKey: function () {
        /* 追加箇所 ここから */
        var contactKey = document.querySelector("#contactKey").value;
        if (!contactKey) {
            app.showAlert("", "Please input ContactKey");
            return false;
        }
        MCCordovaPlugin.setContactKey(contactKey,
        function(success){
            app.showAlert("getContactKey success", success);
        }, function(error){
            app.showAlert("getContactKey error", error);
        });
        return false;
    },
    getContactKey: function (){
         MCCordovaPlugin.getContactKey(
         function(success){
             app.showAlert("getContactKey success", success);
         }, function(error){
             app.showAlert("getContactKey error", error);
         });
         return false;
    },
    isPushEnabled: function () {
        MCCordovaPlugin.isPushEnabled(
         function(success){
             app.showAlert("isPushEnabled success", success);
         }, function(error){
             app.showAlert("isPushEnabled error", error);
         });
         return false;
    },
    enablePush: function () {
        MCCordovaPlugin.enablePush(
         function(success){
             app.showAlert("enablePush success", "");
         }, function(error){
             app.showAlert("enablePush error", error);
         });
         return false;
    },
    disablePush: function () {
        MCCordovaPlugin.disablePush(
         function(success){
             app.showAlert("disablePush success", "");
         }, function(error){
             app.showAlert("disablePush error", error);
         });
         return false;
    },
    getSystemToken: function () {
        MCCordovaPlugin.getSystemToken(
        function(success){
            app.showAlert("getSystemToken success", success);
        }, function(error){
            app.showAlert("getSystemToken error", error);
        });
        return false;
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        
        MCCordovaPlugin.setOnNotificationOpenedListener(function(params){
        console.log("---- openListener Called -------");

        var valtxt = JSON.stringify(params.values);
        console.log(`values: ${valtxt}`);

        var type = params.values.type;
        var url = params.values.url;
        //$('#txt1').text(`values: ${valtxt}`);
        // Custom Key値の取得 params.values.[CUSTOMKEYNAME]
        var ckey = params.values.key1;

        if((type == "cloudPage" || type == "openDirect") && url != ""){
        window.open(url , '');
        }

        });

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    
};

app.initialize();
