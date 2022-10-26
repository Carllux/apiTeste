import multer = require('multer');

import {v4 as uuid} from "uuid"
// const { uuid } = require(‘uuid’);

import fs = require('fs')

var updateDir = ‘./app/uploads/’;

const storage = multer.diskStorage({

    destination: function (req, file, cb) {

 

        var d = new Date();

        var dateDir = d.getFullYear() + ‘/’ + (d.getMonth() + 1);

        var finalDir = updateDir + “/” + dateDir;

        fs.exists(finalDir, (exists: any) => {

            if (!exists) {

                fs.mkdir(finalDir, { recursive: true }, (err) => {

                    if (err) throw err;

                    else

                        cb(null, finalDir);

                });

            } else {

                cb(null, finalDir);

            }

        });

 

    }, filename: function (req, file, cb) {

        var d = new Date();

        if (params.allowedTypes.includes(file.mimetype)) {

           var extensoes = new Map(params.extensoes);

           var arquivo = `${uuid()}-${file.originalname}` 

           cb(null, arquivo);

        } else {

            cb(new Error(‘Apenas imagens são permitidas’))

        }

 

    }

 

})

 

export const upload = multer({ storage: storage });