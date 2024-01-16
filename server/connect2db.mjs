#! /usr/bin/env node
'use_strict';

import mongoose from 'mongoose';

const username = process.env.MONGODB_USR ? encodeURIComponent(process.env.MONGODB_USR) : encodeURIComponent("dbuser");
const password = process.env.MONGODB_PW ? encodeURIComponent(process.env.MONGODB_PW) : console.log('KEIN DB-PASSWORT ANGEGEBEN');

const clusterName = process.env.MONGODB_CLUSTER ? encodeURIComponent(process.env.MONGODB_CLUSTER) : "vocabtrainer.b2xovpu";
const databaseName = process.env.MONGODB_DBNAME ? encodeURIComponent(process.env.MONGODB_DBNAME) : "vocabtrainer";
const collectionName = process.env.MONGODB_COLL ? encodeURIComponent(process.env.MONGODB_COLL) : "collectionName";

const mongoDB = `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${databaseName}?retryWrites=true&w=majority`;

export { mongoDB, collectionName };
