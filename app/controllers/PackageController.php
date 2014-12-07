<?php

class PackageController extends \BaseController {

  /**
   * Display all privileges.
   *
   * @return Response
   */
  public function index()
  {
    $wheres = json_decode(Input::get('where'));

    if ($wheres) {

      $packages = Package::where('category_id', $wheres->category_id)->get();

      $response = $packages;
    } else {
      $packages = Package::get();

      $response = $packages;
    }

    return Response::json($response);
  }

  /**
   * Display product by id.
   *
   * * @param  int  $id
   * @return Response
   */
  public function show($id)
  {
    $package = Package::where('id', $id)->first();

    return $package;
  }


  /**
   * Store a newly created resource in storage.
   *
   * @return Response
   */
  public function store()
  {
    $data = Input::all();

    if ( !empty($data['id']) ) {
      $package = Package::where('id', $data['id'])->first();

      if (!empty($package)) {
        $package->fill($data);
        $package->save();
      } else {
        $package = "There was an issue please try again.";
      }
    } else {
      $package = Package::create($data);
    }



    return Response::json($package);
  }


  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return Response
   */
  public function destroy($id)
  {
    Package::destroy($id);

    return Response::json(array('success' => true));
  }


}
