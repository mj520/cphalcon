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

namespace Phalcon\Test\Integration\Mvc\Router;

use IntegrationTester;
use Phalcon\Mvc\Router;

class SetDefaultModuleCest
{
    /**
     * Tests Phalcon\Mvc\Router :: setDefaultModule()
     *
     * @author Sid Roberts <https://github.com/SidRoberts>
     * @since  2019-05-22
     */
    public function mvcRouterSetDefaultModule(IntegrationTester $I)
    {
        $I->wantToTest('Mvc\Router - setDefaultModule()');

        $router = new Router();

        $router->setDefaultModule('front');

        $I->assertEquals(
            'front',
            $router->getDefaults()['module']
        );
    }
}
