<?php
declare(strict_types=1);

/**
 * This file is part of the Phalcon Framework.
 *
 * (c) Phalcon Team <team@phalconphp.com>
 *
 * For the full copyright and license information, please view the LICENSE.txt
 * file that was distributed with this source code.
 */

namespace Phalcon\Test\Integration\Mvc\Dispatcher;

use IntegrationTester;
use Phalcon\Test\Integration\Mvc\Dispatcher\Helper\BaseDispatcher;

class SetControllerSuffixCest extends BaseDispatcher
{
    /**
     * Tests Phalcon\Mvc\Dispatcher :: setControllerSuffix()
     *
     * @author Sid Roberts <https://github.com/SidRoberts>
     * @since  2019-06-01
     */
    public function mvcDispatcherSetControllerSuffix(IntegrationTester $I)
    {
        $I->wantToTest('Mvc\Dispatcher - setControllerSuffix()');

        $dispatcher = $this->getDispatcher();

        $dispatcher->setControllerSuffix('Bleh');

        $I->assertEquals(
            'Bleh',
            $dispatcher->getHandlerSuffix()
        );
    }
}
