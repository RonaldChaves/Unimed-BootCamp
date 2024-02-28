﻿var path = @"c:\temp\globo";
using var fsw = new FileSystemWatcher(path);

fsw.Created += OnCreated;
fsw.Renamed += OnRenamed;
fsw.Deleted += OnDeleted;

fsw.EnableRaisingEvents = true;
fsw.IncludeSubdirectories = true;

Console.WriteLine($"Monitorando eventos na pasta {path}");
Console.WriteLine($"Pressione [enter] para finalizar...");
Console.ReadLine();

void OnRenamed(object sender, RenamedEventArgs e)
{
    Console.WriteLine($"Foi renomeado de {e.OldName},  para o {e.Name}");
}

void OnDeleted(object sender, FileSystemEventArgs e)
{
    Console.WriteLine($"Foi deletado o arquivo {e.Name}");
}

void OnCreated(object sender, FileSystemEventArgs e)
{
    Console.WriteLine($"Foi criado o arquivo {e.Name}");
}

