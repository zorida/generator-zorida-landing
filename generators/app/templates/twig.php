<?php
  $pageData = array(
    "title" => "<%= name %>",
    "group" => "XYZ"
  );
  require __DIR__ . '/vendor/autoload.php';

  use Twig\Environment;
  use Twig\Loader\FilesystemLoader;
  
  $loader = new FilesystemLoader(__DIR__ . '/<%= viewsFolder %>');
  $twig = new Environment($loader);
  
  echo $twig->render("home.twig", $pageData);
?>

