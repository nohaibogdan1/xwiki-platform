/*
 * See the NOTICE file distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
require(['jquery'], function($) {
  
  /**
   * Initializer called when the DOM is ready
   */
  var init = function() {
    // Register a callback when an option is clicked
    $('.xwiki-select').find('.xwiki-select-option').click(function (event) {
      var option = $(this);
      var selectWidget = option.parents('.xwiki-select');
      selectWidget.find('.xwiki-select-option-selected').removeClass('xwiki-select-option-selected');
      option.find('input').prop('checked', true);
      option.addClass('xwiki-select-option-selected');
      selectWidget.trigger('xwiki:select:updated', {'elements': select[0]});
    });
  };

  $(window).ready(init);

});

