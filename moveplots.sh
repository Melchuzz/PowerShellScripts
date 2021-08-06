#!/bin/bash
while true  
do  
  # Command to execute
    execute_cmd=mv

    #path="/home/ypsvc/sa_automation"

    # Files inside actual_dir has to be moved
    actual_dir="/mnt/NVME2CHIA1/final"

    # This is the directory where files will be moved and kept
    backup_dir="/mnt/HDD12CHIA1"

    # Move each file from actual_dir to backup_dir

    echo "Moving files to backup_dir"

    for f in $(find $actual_dir -type f -name *.plot); ## used find here, with semicolon
    do
     echo $f
     $execute_cmd $f $backup_dir
    done

    echo "Moving of files completed"  
    sleep 1620
    #sleep 2700  
done

