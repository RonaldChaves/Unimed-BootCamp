var path = @"c:\temp\globo";

LerDiretorios(path);
Console.WriteLine("Digite ENTER  para air da aplicação.");
Console.ReadLine();

static void LerDiretorios(string path)
{
    if (Directory.Exists(path))
    {
        var diretorios = Directory.GetDirectories(path, "*", SearchOption.AllDirectories);
        foreach (var dir in diretorios)
        {
            var dirInfo = new DirectoryInfo(dir);
            Console.WriteLine($"[NOME]: {dirInfo.Name}");
            Console.WriteLine($"[RAIZ]: {dirInfo.Root}");
            if (dirInfo.Parent != null)
                Console.WriteLine($"[PAI]: {dirInfo.Parent.Name}");
            Console.WriteLine("-------------------");
        }
    }
    else
    {
        Console.WriteLine($"{path} não existe.");
    }
}