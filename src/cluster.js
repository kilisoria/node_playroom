import cluster from 'cluster';

if (cluster.isWorker) {
    console.log('I am a worker');
} else {
    console.log('I am a master');
    cluster.fork();
    cluster.fork();
}

if (cluster.workers) {
    console.log(cluster.workers['1']);
}