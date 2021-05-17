'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  // note: arguments and options should be defined in the constructor.
  constructor(args, opts) {
    super(args, opts);

    // This method adds support for a `--nophp` flag
    this.option("nophp");

    // And you can then access it later; e.g.
    this.nophp = this.options.nophp;

  };

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the SUPER ${chalk.red('Zorida Landing Page')} generator!`
      )
    );

    // var done = this.async();   
    const prompts = [
      {
        type: 'confirm',
        name: 'twigOption',
        message: 'Would you like to use a basic twig rendering file?',
        default: false
      },
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        // Defaults to the project's folder name if the input is skipped
        default: this.appname
      },
      {
        type: 'input',
        name: 'title',
        message: 'Your Landing Page Title',
        // Defaults to the project's folder name if the input is skipped
        default: this.appname
      },
      {
        type: 'input',
        name: 'viewsFolder',
        message: 'Write the folder name for your rendered templates',
        // Defaults to the project's folder name if the input is skipped
        default: 'views'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.twigOption;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('_readme.md'),
      this.destinationPath('_readme.md')
    );
    this.fs.copy(
      this.templatePath('_gruntfile.js'),
      this.destinationPath('Gruntfile.js')
    );
    this.fs.copy(
      this.templatePath('assets/**/*'),
      this.destinationPath('assets')
    );    
    if (this.nophp) {
      this.fs.copyTpl(
        this.templatePath('index.html'),
        this.destinationPath('index.html'), {
            title: this.props.title
        });
    } else {
      this.fs.copyTpl(
      this.templatePath('index.php'),
      this.destinationPath('index.php'), {
          title: this.props.title
      });
      if (this.props.twigOption) {
        this.fs.copyTpl(
          this.templatePath('views/*'),
          this.destinationPath(this.props.viewsFolder), {
              ...this.props
          }
        );
        this.fs.copyTpl(
          this.templatePath('twig.php'),
          this.destinationPath('twig.php'), {
              ...this.props
          }
        );
        
      }
    }
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
          ...this.props
      }
    );
  }

  install() {
    this.installDependencies({ bower: false, npm: true });
  } 

  end() {
    
    if (this.props.twigOption) {
      console.log('Installing Composer dep\'s for Twig rendering')
      // this.spawnCommand('cd', [this.props.viewsFolder]);
      this.spawnCommand('composer', ["require", "twig/twig:^2.0"]);
    }
    console.log('Done!')
  }

};
