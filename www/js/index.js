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
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        var dir = new DirManager;
        dir.create('/lahasan', Log('created successfully'), Log('something went wrong'));
        var string = device.version;
       
    },

    // Update DOM on a Received Event
    editHeading: function() {
        var orgaisation = prompt("Enter Your organisation name", "Dept of Youth Services & Sports H.P");
        document.getElementById('deparment').innerHTML = orgaisation;
    },
    editTitle: function() {
        var title = prompt("Enter your title", "Indoor Stadium Dharamshala");
        document.getElementById('sec-department').innerHTML = title;
    },
    cardType: function() {
        var cardtype = prompt("Type of Card", "Identity card");
        document.getElementById("cardType").innerHTML = cardtype;
    },
    readURLForEditLogo:function(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var a=document.getElementById("logo_edit").src = e.target.result;
            console.log(a)
        };
        reader.readAsDataURL(input.files[0]);   
    }
},

getvalues: function () {
        // Getting the value of your text input
        var username =  document.getElementById("userName").value;
            // Storing the value above into localStorage
            localStorage.setItem("userName", username);

            var dateOfBirth = document.getElementById("dob").value;
            localStorage.setItem("dob", dateOfBirth);

            var addrr = document.getElementById("address").value;
            localStorage.setItem("address", addrr);

            var student_non  = document.getElementById("student_Non").value;
            localStorage.setItem("student_Non", student_non );

            var Game = document.getElementById("game").value;
            localStorage.setItem("game", Game);

            var number = document.getElementById("number").value;
            localStorage.setItem("number", number);


            var time = document.getElementById("time").value;
            localStorage.setItem("time", time);

            
            
            // localStorage.setItem("upload_image", image);


            var imageStore = document.getElementById("blah").src;
            localStorage.setItem("userImage", imageStore);

            var editLogo = document.getElementById("logo_edit").src;
            localStorage.setItem("logo_edit", editLogo);

            var organisation = document.getElementById("deparment").innerHTML;
            localStorage.setItem("organisation", organisation);

            var title = document.getElementById("sec-department").innerHTML;
            localStorage.setItem("title", title);

            var cardType = document.getElementById("third-deparment").innerHTML;
            localStorage.setItem("cardType", cardType);

            var nameLabel = document.getElementById("nameLabel").innerHTML;
            localStorage.setItem("nameLabel", nameLabel);

            var dateOfBirt = document.getElementById("dateOfBirt").innerHTML;
            localStorage.setItem("dateOfBirt", dateOfBirt);

            var residence_field = document.getElementById("residence_field").innerHTML;
            localStorage.setItem("residence_field", residence_field);

            var multiple = document.getElementById("multiple").innerHTML;
            localStorage.setItem("multiple", multiple);

            var addGame = document.getElementById("addGame").innerHTML;
            localStorage.setItem("addGame", addGame);

            var editPhone = document.getElementById("editPhone").innerHTML;
            localStorage.setItem("editPhone", editPhone);

            var Timing_field = document.getElementById("Timing_field").innerHTML;
            localStorage.setItem("Timing_field", Timing_field);

            
            return true;
        },
        init: function () {
            document.getElementById("organiztion").innerHTML = localStorage.getItem("organisation")
            document.getElementById("print-title").innerHTML = localStorage.getItem("title");
            document.getElementById("print-card").innerHTML = localStorage.getItem("cardType");
            document.getElementById("getlabel").innerHTML = localStorage.getItem("nameLabel");
            document.getElementById("username").innerHTML = localStorage.getItem("userName");
            document.getElementById("get_dob").innerHTML = localStorage.getItem("dateOfBirt");    
            document.getElementById("DOB").innerHTML = localStorage.getItem("dob");
            document.getElementById("get_residence").innerHTML = localStorage.getItem("residence_field");
            document.getElementById("Adress").innerHTML = localStorage.getItem("address");
            document.getElementById("get_multiple").innerHTML = localStorage.getItem("multiple");''
            document.getElementById("Student_Nom").innerHTML = localStorage.getItem("student_Non");
            document.getElementById("getGame").innerHTML = localStorage.getItem("addGame");
            document.getElementById("game").innerHTML = localStorage.getItem("game");
            document.getElementById("get_contact").innerHTML = localStorage.getItem("editPhone");
            document.getElementById("number").innerHTML = localStorage.getItem("number");
            document.getElementById("get_time").innerHTML = localStorage.getItem("Timing_field");
            document.getElementById("time").innerHTML = localStorage.getItem("time");

            var imageUrl = localStorage.getItem("userImage");

            var getImage = document.getElementById("image");


            var showImage = document.createElement("IMG");
            showImage.className = 'user_uplodad_img';
            showImage.id = "usr_image";
            showImage.setAttribute("src", imageUrl);
            var show = getImage.appendChild(showImage);

            var updatedImgUrl = localStorage.getItem("logo_edit");
            var createUpdatedImage = document.getElementById("logo");

            var showUpdatedImage = document.createElement("IMG");
            showUpdatedImage.className = "updatedImage";
            showUpdatedImage.id = "updatedImageShow";
            showUpdatedImage.setAttribute("src", updatedImgUrl);
            var displayUpdated = createUpdatedImage.appendChild(showUpdatedImage)
        },

        editName: function () {
            var firstField = prompt("Enter your field name", "Name")
            var changeField = document.getElementById("nameLabel").innerHTML = firstField;
        },

        editDOB: function() {
            var secondField = prompt("Enter Your field Name", "Date of Birth");
            var changeField = document.getElementById("dateOfBirt").innerHTML = secondField;
        },

        editAddress: function () {
            var thirdField = prompt("Enter your filed name ", "Address")
            var changeField = document.getElementById("residence_field").innerHTML = thirdField;
        },

        editMultiple: function(){
            var fourthField = prompt("Enter your field name", "Stuent/Non Student");
            var changeField = document.getElementById("multiple").innerHTML = fourthField;
        },

        editGame: function() {
            var fifthField = prompt("Enter your field name", "Game");
            var changeField = document.getElementById("addGame").innerHTML = fifthField;
        },

        editContact: function() {
            var sixthField = prompt("Enter your field name", "Mob/Phone");
            var changeField = document.getElementById("editPhone").innerHTML = sixthField;
        },

        editTime: function () {
            var seventhField = prompt("Enter your field name", "Timing");
            var changeField = document.getElementById("Timing_field").innerHTML = seventhField;
        },
        readURLForProfile:function(input) {
          if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("blah").src = e.target.result;
            };
            reader.readAsDataURL(input.files[0]);   
        }
    },
    // fileSystem: function () {
    //     window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function (fs) {

    //         console.log('file system open: ' + fs.name);
    //         createFile(fs.root, 'newTempFile.txt', false)
    //         fs.root.getFile("newPersistentFile.txt", { create: true, exclusive: false }, function (fileEntry) {

    //             console.log("fileEntry is file?" + fileEntry.isFile.toString());
    //                 // fileEntry.name == 'someFile.txt'
    //                 // fileEntry.fullPath == '/someFile.txt'
    //                 writeFile(fileEntry, null);

    //             }, onErrorCreateFile);

    //     }, onErrorLoadFs);
    // },
    generateCanvasImage: function() {
        html2canvas(document.body, {
            onrendered: function(canvas) {
                var can = document.getElementById("canvas")
                // can.appendChild(canvas);
                // var canvas = document.getElementById('example'),
                dataUrl = canvas.toDataURL("image/jpeg;base64;"),

                imageFoo = document.createElement('img');
                imageFoo.src = dataUrl;

                // Style your image here
                imageFoo.style.width = '100%';
                imageFoo.style.height = '100%';

                    // After you are done styling it, append it to the BODY element
                    var date = Date.now();
                    
                    can.appendChild(imageFoo);
                    var file = new FileManager;
                    // file.download_file(imageFoo.src, 'clubcard', "img.jpeg", log("success"));
                    //alert("hello")
                    var name = localStorage.getItem("userName");
                    var filename = 'clubcard'+name + '.jpg';
                    file.download_file(dataUrl,'/clubcard',filename,Log('downloaded sucess'));   
                },
                background: '#FFF'

            });
            // app.writeFile();

    }
    // writeFile: function() {

    //     var file = new FileManager;
    //     file.write_file('/clubcard', 'userdata.txt', 'data', function(result) {
            
    //         console.log('write data successfully');

    //     }, Log('something went wrong'));
    // }


};

app.initialize();