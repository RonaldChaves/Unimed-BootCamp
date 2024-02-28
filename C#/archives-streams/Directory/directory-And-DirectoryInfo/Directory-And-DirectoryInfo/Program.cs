
// CrairDiretoriosGlobo();
// CriarArquivo();

// var origem = Path.Combine(Environment.CurrentDirectory, "brasil.txt");
// var destino = Path.Combine(Environment.CurrentDirectory, "globo",
// "América do Sul",
// "BRA",
// "brasil.txt");

// MoverArquivo(origem, destino);

static void LerArquivos(string path)
{
    var arquivos = Directory.GetFiles(path, "*", SearchOption.AllDirectories);
    foreach (var arquivo in arquivos)
    {
        var fileInfo = new FileInfo(arquivo);
        Console.WriteLine($"[NOME]: {fileInfo.Name}");
        Console.WriteLine($"[TAMANHO]: {fileInfo.Length}");
        Console.WriteLine($"[ULTIMO ACESSO]: {fileInfo.LastAccessTime}");
        Console.WriteLine($"[PASTA]: {fileInfo.DirectoryName}");
        Console.WriteLine("-----------------------------------");
    }
}

static void CopiarArquivo(string pathOrige, string pathDestin)
{
    File.Copy(pathOrige, pathDestin);
}

static void MoverArquivo(string pathOrige, string pathDestin)
{
    if (!File.Exists(pathOrige))
    {
        Console.WriteLine("Arquivo de origem já exite.");
        return;
    }
    if (File.Exists(pathDestin))
    {
        Console.WriteLine("Arquivojá exite na pasta destino.");
        return;
    }
    File.Move(pathOrige, pathDestin);
}
static void CriarArquivo()
{
    var path = Path.Combine(Environment.CurrentDirectory, "brasil.txt");
    if (!File.Exists(path))
    {
        using var sw = File.CreateText(path);
        sw.WriteLine("População: 220M");
        sw.WriteLine("IDH: 0,901");
        sw.WriteLine("Dados Atualizados em : 20/04/2022");
    }
}
static void CrairDiretoriosGlobo()
{
    var path = Path.Combine(Environment.CurrentDirectory, "globo");
    if (!Directory.Exists(path))
    {
        var dirGlobo = Directory.CreateDirectory(path);
        var dirAmNorte = dirGlobo.CreateSubdirectory("América do Norte");
        var dirAmSul = dirGlobo.CreateSubdirectory("América do Sul");
        var dirAmCentral = dirGlobo.CreateSubdirectory("América Central");

        dirAmNorte.CreateSubdirectory("USA");
        dirAmNorte.CreateSubdirectory("MEX");
        dirAmNorte.CreateSubdirectory("CAN");

        dirAmCentral.CreateSubdirectory("COS");
        dirAmCentral.CreateSubdirectory("PAN");

        dirAmSul.CreateSubdirectory("BRA");
        dirAmSul.CreateSubdirectory("ARG");
        dirAmSul.CreateSubdirectory("PAR");
    }
}


//Press "debug" or write on Terminal "dotnet build" for start the project. 

