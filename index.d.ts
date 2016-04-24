// Type definitions for gulp-git
// Project: https://github.com/stevelacy/gulp-git
// Definitions by: Paul Ryan <https://github.com/paullryan>

declare module "gulp-git" {
  import * as through2 from 'through2';

  namespace bump {
    interface Bump {
      init(options?: Option, callback?: Function);
      add(options?: Option): () => any;
      commit(message: string|string[], options?: Option): () => any;
      addRemote(remote: string, location: string, options?: Option, callback?: Function): () => any;
      removeRemote(remote: string, options?: Option, callback?: Function): () => any;
      push(remote: string, branch: string, options?: Option, callback?: Function): () => any;
      pull(remote: string, branch: string, options?: Option, callback?: Function): () => any;
      fetch(remote: string, branch: string, options?: Option, callback?: Function): () => any;
      clone(url: string, options?: Option, callback?: Function): () => any;
      tag(tag: string, message: string, options?: Option, callback?: Function): () => any;
      branch(branch: string, options?: Option, callback?: Function): () => any;
      checkout(branch: string, options?: Option, callback?: Function): () => any;
      checkoutFiles(options?: Option): () => any;
      merge(branch: string, options?: Option, callback?: Function): () => any;
      reset(commit: string, options?: Option, callback?: Function): () => any;
      revParse(options?: Option, callback?: Function): () => any;
      rm(options?: Option): () => any;
      addSubmodule(url: string, name: string, options?: Option): () => any;
      updateSubmodule(options?: Option): () => any;
      status(options?: Option, callback?: Function): () => any;
      exec(options?: Option, callback?: Function): () => any;
      clean(paths?: string, options?: Option, callback?: Function): () => any;
    }
    interface Option {
      cwd?: string,
      args?: string,
      disableAppendPaths?: boolean,
      emitData?: boolean,
      quiet?: boolean
    }
  }
  var bump: bump.Bump
  export = bump;
}
