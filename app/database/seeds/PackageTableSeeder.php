<?php

class PackageTableSeeder extends Seeder
{
  public function run() {
    DB::table('packages')->delete();

    Package::create(array(
      'user_id' => '1',
      'category_id' => '1',
      'code' => 'H-THEA-S',
      'name' => 'Standard 20x20 - Home theater system',
      'summary' => 'Have your TV professionally installed by experienced, knowledgeable technicians (residential installations only). To receive a High Definition TV picture, you must have the proper HD source and cables prior to setting up an appointment.',
      'description' => "<div style='text-align: left;'><h4>Description</h4>Have your TV professionally installed by experienced, knowledgeable technicians (residential installations only).  To receive a High Definition TV picture, you must have the proper HD source and cables prior to setting up an appointment.  Additional charges may apply for extra labor and equipment.<br/></div><div style='text-align: left;'><span><br/></span></div><p style='text-align: left;'>This installation include s recycling of 1 existing television.  This service does not cover recycling of a DLP, Rear Projection, and or Console TV.</p><p style='text-align: left;'><br/></p></h5><h4 style='text-align: left;'>Contact</h4><p style='text-align: left;'>Contact us directly if you have questions about the service or need to change an appointment. Call 1-866-504-4868 Monday-Friday 9:00 A.M. to 10:00 P.M. Central time (excluding holidays).</p><p style='text-align: left;'><br/></p><h4 style='text-align: left;'>Service Includes</h4><ul><li style='text-align: left;'>On-wall mounting: Secure TV onto customer-provided mounting bracket ( NO brick or concrete walls)</li><li style='text-align: left;'>Home theater set-up: Connect TV to new and existing components: DVD, DVR, VCR, game console or audio components.  Conceal customer-provided audio/video cables in the wall</li><li style='text-align: left;'>Program remotes: Up to two non-learning universal remotes</li><li style='text-align: left;'>Recycle old TV: Restrictions and fees may apply</li><li style='text-align: left;'>Educational demonstration of the basic TV functions (up to 20 minutes)</li><li style='text-align: left;'>90-day labor warranty</li></ul><p style='text-align: left;'><br/></p><h4 style='text-align: left;'>Service DOES NOT include</h4><ul><li style='text-align: left;'>Mounting over fireplace or on brick wall not included with this program</li><li style='text-align: left;'>Mounting of speakers or in-wall speaker wire concealment of Home Theater in a Box</li><li style='text-align: left;'>Programming learning-style remote controls (PC required)</li></ul><p style='text-align: left;'><br/></p><h6><i>Note: Power cords CANNOT be concealed in the wall.</i></h6><h6><i><i style='color: rgb(85, 85, 85);background-color: rgb(255, 255, 255);'>At this time this service cannot be provided in the following states: Delaware, New Mexico, New York, Oregon, Puerto Rico, Virgina, Wyoming, Hawaii and Alaska.</i><br/></i></h6><p><br/></p>",
      'sequence' => '1',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    Package::create(array(
      'user_id' => '1',
      'category_id' => '1',
      'code' => 'H-THEA-S',
      'summary' => 'Have your TV professionally installed by experienced, knowledgeable technicians (residential installations only). To receive a High Definition TV picture, you must have the proper HD source and cables prior to setting up an appointment.',
      'description' => "<div style='text-align: left;'><h4>Description</h4>Have your TV professionally installed by experienced, knowledgeable technicians (residential installations only).  To receive a High Definition TV picture, you must have the proper HD source and cables prior to setting up an appointment.  Additional charges may apply for extra labor and equipment.<br/></div><div style='text-align: left;'><span><br/></span></div><p style='text-align: left;'>This installation include s recycling of 1 existing television.  This service does not cover recycling of a DLP, Rear Projection, and or Console TV.</p><p style='text-align: left;'><br/></p></h5><h4 style='text-align: left;'>Contact</h4><p style='text-align: left;'>Contact us directly if you have questions about the service or need to change an appointment. Call 1-866-504-4868 Monday-Friday 9:00 A.M. to 10:00 P.M. Central time (excluding holidays).</p><p style='text-align: left;'><br/></p><h4 style='text-align: left;'>Service Includes</h4><ul><li style='text-align: left;'>On-wall mounting: Secure TV onto customer-provided mounting bracket ( NO brick or concrete walls)</li><li style='text-align: left;'>Home theater set-up: Connect TV to new and existing components: DVD, DVR, VCR, game console or audio components.  Conceal customer-provided audio/video cables in the wall</li><li style='text-align: left;'>Program remotes: Up to two non-learning universal remotes</li><li style='text-align: left;'>Recycle old TV: Restrictions and fees may apply</li><li style='text-align: left;'>Educational demonstration of the basic TV functions (up to 20 minutes)</li><li style='text-align: left;'>90-day labor warranty</li></ul><p style='text-align: left;'><br/></p><h4 style='text-align: left;'>Service DOES NOT include</h4><ul><li style='text-align: left;'>Mounting over fireplace or on brick wall not included with this program</li><li style='text-align: left;'>Mounting of speakers or in-wall speaker wire concealment of Home Theater in a Box</li><li style='text-align: left;'>Programming learning-style remote controls (PC required)</li></ul><p style='text-align: left;'><br/></p><h6><i>Note: Power cords CANNOT be concealed in the wall.</i></h6><h6><i><i style='color: rgb(85, 85, 85);background-color: rgb(255, 255, 255);'>At this time this service cannot be provided in the following states: Delaware, New Mexico, New York, Oregon, Puerto Rico, Virgina, Wyoming, Hawaii and Alaska.</i><br/></i></h6><p><br/></p>",
      'sequence' => '1',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    Package::create(array(
      'user_id' => '1',
      'category_id' => '1',
      'code' => 'H-THEA-S',
      'name' => 'Standard 20x25 - Home theater system',
      'summary' => 'Have your TV professionally installed by experienced, knowledgeable technicians (residential installations only). To receive a High Definition TV picture, you must have the proper HD source and cables prior to setting up an appointment.',
      'description' => "<div style='text-align: left;'><h4>Description</h4>Have your TV professionally installed by experienced, knowledgeable technicians (residential installations only).  To receive a High Definition TV picture, you must have the proper HD source and cables prior to setting up an appointment.  Additional charges may apply for extra labor and equipment.<br/></div><div style='text-align: left;'><span><br/></span></div><p style='text-align: left;'>This installation include s recycling of 1 existing television.  This service does not cover recycling of a DLP, Rear Projection, and or Console TV.</p><p style='text-align: left;'><br/></p></h5><h4 style='text-align: left;'>Contact</h4><p style='text-align: left;'>Contact us directly if you have questions about the service or need to change an appointment. Call 1-866-504-4868 Monday-Friday 9:00 A.M. to 10:00 P.M. Central time (excluding holidays).</p><p style='text-align: left;'><br/></p><h4 style='text-align: left;'>Service Includes</h4><ul><li style='text-align: left;'>On-wall mounting: Secure TV onto customer-provided mounting bracket ( NO brick or concrete walls)</li><li style='text-align: left;'>Home theater set-up: Connect TV to new and existing components: DVD, DVR, VCR, game console or audio components.  Conceal customer-provided audio/video cables in the wall</li><li style='text-align: left;'>Program remotes: Up to two non-learning universal remotes</li><li style='text-align: left;'>Recycle old TV: Restrictions and fees may apply</li><li style='text-align: left;'>Educational demonstration of the basic TV functions (up to 20 minutes)</li><li style='text-align: left;'>90-day labor warranty</li></ul><p style='text-align: left;'><br/></p><h4 style='text-align: left;'>Service DOES NOT include</h4><ul><li style='text-align: left;'>Mounting over fireplace or on brick wall not included with this program</li><li style='text-align: left;'>Mounting of speakers or in-wall speaker wire concealment of Home Theater in a Box</li><li style='text-align: left;'>Programming learning-style remote controls (PC required)</li></ul><p style='text-align: left;'><br/></p><h6><i>Note: Power cords CANNOT be concealed in the wall.</i></h6><h6><i><i style='color: rgb(85, 85, 85);background-color: rgb(255, 255, 255);'>At this time this service cannot be provided in the following states: Delaware, New Mexico, New York, Oregon, Puerto Rico, Virgina, Wyoming, Hawaii and Alaska.</i><br/></i></h6><p><br/></p>",
      'sequence' => '1',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    Package::create(array(
      'user_id' => '1',
      'category_id' => '1',
      'code' => 'H-THEA-S',
      'name' => 'Standard 16x16 - Home theater system',
      'summary' => 'Have your TV professionally installed by experienced, knowledgeable technicians (residential installations only). To receive a High Definition TV picture, you must have the proper HD source and cables prior to setting up an appointment.',
      'description' => "<div style='text-align: left;'><h4>Description</h4>Have your TV professionally installed by experienced, knowledgeable technicians (residential installations only).  To receive a High Definition TV picture, you must have the proper HD source and cables prior to setting up an appointment.  Additional charges may apply for extra labor and equipment.<br/></div><div style='text-align: left;'><span><br/></span></div><p style='text-align: left;'>This installation include s recycling of 1 existing television.  This service does not cover recycling of a DLP, Rear Projection, and or Console TV.</p><p style='text-align: left;'><br/></p></h5><h4 style='text-align: left;'>Contact</h4><p style='text-align: left;'>Contact us directly if you have questions about the service or need to change an appointment. Call 1-866-504-4868 Monday-Friday 9:00 A.M. to 10:00 P.M. Central time (excluding holidays).</p><p style='text-align: left;'><br/></p><h4 style='text-align: left;'>Service Includes</h4><ul><li style='text-align: left;'>On-wall mounting: Secure TV onto customer-provided mounting bracket ( NO brick or concrete walls)</li><li style='text-align: left;'>Home theater set-up: Connect TV to new and existing components: DVD, DVR, VCR, game console or audio components.  Conceal customer-provided audio/video cables in the wall</li><li style='text-align: left;'>Program remotes: Up to two non-learning universal remotes</li><li style='text-align: left;'>Recycle old TV: Restrictions and fees may apply</li><li style='text-align: left;'>Educational demonstration of the basic TV functions (up to 20 minutes)</li><li style='text-align: left;'>90-day labor warranty</li></ul><p style='text-align: left;'><br/></p><h4 style='text-align: left;'>Service DOES NOT include</h4><ul><li style='text-align: left;'>Mounting over fireplace or on brick wall not included with this program</li><li style='text-align: left;'>Mounting of speakers or in-wall speaker wire concealment of Home Theater in a Box</li><li style='text-align: left;'>Programming learning-style remote controls (PC required)</li></ul><p style='text-align: left;'><br/></p><h6><i>Note: Power cords CANNOT be concealed in the wall.</i></h6><h6><i><i style='color: rgb(85, 85, 85);background-color: rgb(255, 255, 255);'>At this time this service cannot be provided in the following states: Delaware, New Mexico, New York, Oregon, Puerto Rico, Virgina, Wyoming, Hawaii and Alaska.</i><br/></i></h6><p><br/></p>",
      'sequence' => '1',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    Package::create(array(
      'user_id' => '3',
      'category_id' => '1',
      'code' => 'H-THEA-C',
      'name' => 'Custom Home Theater Setup',
      'summary' => 'A bunch of cool customer stuff.',
      'description' => 'A bunch of cool customer stuff.',
      'sequence' => '1',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));




    Package::create(array(
      'user_id' => '1',
      'category_id' => '2',
      'code' => 'H-AUTO-S',
      'name' => 'Apple Home Automation Installation',
      'summary' => 'Installation of apple home products.',
      'description' => 'Installation of apple home products.',
      'sequence' => '1',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));

    Package::create(array(
      'user_id' => '3',
      'category_id' => '2',
      'code' => 'H-AUTO-C',
      'name' => 'Nest Installation',
      'summary' => 'Installation of Nest learning thermostat.',
      'description' => 'Installation of Nest learning thermostat.',
      'sequence' => '1',
      'effective_from' => date('Y-m-d', strtotime('yesterday')),
      'effective_to' => '',
    ));


  }

}